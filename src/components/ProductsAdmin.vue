<template>
  <div class="products">
    <h2>Products</h2>
    <br />
    <div class="product-test">
      <h5>Add/Edit</h5>
      <br />
      <div class="form-group">
        <div class="container">
          <div class="row">
            <div class="col-8">
              <input
                type="text"
                placeholder="Product Name"
                v-model="product.data.name"
                class="form-control"
              /><br />
              <textarea
                type="text"
                placeholder="Description"
                v-model="product.data.description"
                class="form-control"
              />
            </div>
            <div class="col">
              <input
                type="text"
                placeholder="Product Price"
                v-model="product.data.price"
                class="form-control"
              /><br />
              <input
                type="text"
                placeholder="Tags"
                v-model="tag"
                class="form-control"
                @keypress.space="addTag()"
              />
              <label>
                <span
                  v-for="(tag, index) in product.data.tags"
                  :key="index"
                  class="badge bg-primary"
                  >{{ tag }}</span
                >
              </label>

              <div class="mb-3">
                <br />
                <input
                  class="form-control"
                  @change="uploadImage"
                  type="file"
                  id="formFile"
                /><span
                  v-if="fileuploaded"
                  class="badge rounded-pill bg-success"
                  >Success</span
                >
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="col"
              v-for="(image, index) in product.data.image"
              :key="index"
            >
              <div class="img-tile">
                <span class="delete-img" @click="deleteImage(image, index)"
                  >X</span
                >
                <img :src="image" width="80px" alt="images" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <br /><br />
              <div class="form-group form-buttons">
                <button
                  @click="saveData()"
                  v-if="!updateFlag"
                  class="btn btn-primary"
                >
                  Save
                </button>
                <button
                  @click="updateData()"
                  v-if="updateFlag"
                  class="btn btn-primary"
                >
                  Update
                </button>
                <button @click="clearForm()" class="btn btn-danger">
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br /><br />
    <h3>Product List</h3>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Modify</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pro, index) in products" :key="index">
          <td>{{ pro.data.name }}</td>
          <td>${{ pro.data.price }}</td>
          <td>
            <button @click="editProduct(pro)" class="btn btn-primary">
              Edit
            </button>
            <button @click="deleteProduct(pro.id)" class="btn btn-danger">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { db, fb } from "../firebase";
export default {
  name: "ProductsAdmin",
  props: {
    msg: String,
  },
  data() {
    return {
      updateFlag: false,
      fileuploaded: false,
      product: {
        id: null,
        data: {
          price: null,
          name: null,
          description: null,
          tags: [],
          image: [],
          uid: null,
        },
      },
      products: [],
      tag: "",
    };
  },
  created() {
    this.resetData();
    this.getAll();
    this.watcher();
  },
  methods: {
    deleteImage(img, index) {
      console.log(index);
      let image = fb.storage().refFromURL(img);
      this.product.data.image.splice(index, 1);
      image
        .delete()
        .then(() => {
          console.log("Image Deleted");
        })
        .catch((error) => {
          console.log("Error Occured" + error);
        });
    },
    uploadImage(e) {
      let file = e.target.files[0];
      if (file) {
        console.log(file);
        var storageRef = fb.storage().ref("productsImage/" + file.name);
        let uploadTask = storageRef.put(file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            if (progress == 100) {
              this.fileuploaded = true;
            }
            switch (snapshot.state) {
              case fb.storage.TaskState.PAUSED: // or 'paused'
                console.log("Upload is paused");
                break;
              case fb.storage.TaskState.RUNNING: // or 'running'
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            console.error(error);
          },
          () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              let url = downloadURL;
              console.log(url);
              this.product.data.image.push("" + url);
              console.log();
            });
          }
        );
      }
    },
    clearForm() {
      this.product.price = null;
      this.product.name = null;
      this.product.description = null;
      this.product.tags = [];
      this.product.image = [];

      //this.resetData();
      //this.getAll();
    },
    addTag() {
      this.product.data.tags.push(this.tag);
      this.tag = "";
    },
    watcher() {
      let user = fb.auth().currentUser;
      this.product.data.uid = user.uid;
      console.log(this.product.data.uid);
      db.collection("Products").where("uid", "==", this.product.data.uid).onSnapshot((querySnapshot) => {
        this.products = [];
        querySnapshot.forEach((doc) => {
          this.products.push({ id: doc.id, data: doc.data() });
        });
      });
    },
    saveData() {
      if (
        this.product.data.name == null ||
        this.product.data.price == null ||
        this.product.data.name == "" ||
        this.product.data.price == ""
      ) {
        alert("Enter Required details");
      } else {
        //this.product.data.price = "$" + this.product.data.price;

        db.collection("Products")
          .add(this.product.data)
          .then((docRef) => {
            console.log("Document Id:", docRef.id);
            this.resetData();
            this.getAll();
          })
          .catch((error) => {
            console.error("Error adding document", error);
          });
      }
    },
    resetData() {
      Object.assign(this.$data, this.$options.data.apply(this)); //another way to reset data
    },
    getAll() {
      let user = fb.auth().currentUser;
      this.product.data.uid = user.uid;
      console.log(this.product.data.uid);
      db.collection("Products")
        .where("uid", "==", this.product.data.uid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((element) => {
            this.products.push({ id: element.id, data: element.data() });
          });
        });
      console.log(this.products);
    },
    editProduct(product) {
      this.product.data = product.data;
      this.product.id = product.id;
      console.log(product);
      this.updateFlag = true;
    },
    updateData() {
      if (
        this.product.data.name == null ||
        this.product.data.price == null ||
        this.product.data.name == "" ||
        this.product.data.price == ""
      ) {
        alert("Enter Required details");
      } else {
        console.log(this.product.id);
        var item = db.collection("Products").doc(this.product.id);
        return item
          .update(this.product.data)
          .then(() => {
            console.log("Data updated");
            this.updateFlag = false;
            this.resetData();
            this.getAll();
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
    deleteProduct(id) {
      if (confirm("Are you sure?")) {
        db.collection("Products")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document Deleted!");
          })
          .catch((err) => {
            console.error("Unable to delete!", err);
          });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.products {
  margin-top: 2rem;
  background: #f2f2f2;
}

.img-tile {
  position: absolute;
}
.img-tile span.delete-img {
  position: absolute;
  top: -18px;
  left: -2px;
}
.img-tile span.delete-img:hover {
  cursor: pointer;
}
</style>