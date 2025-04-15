<script>
export default {
  // props: ['name','id','emailAdress','phoneNumber'],
  emits: ["toggle-favorite", "delete-friend"],
  props: {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: [String, Number],
      required: true,
    },
    emailAdress: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: [Boolean, String],
      required: false,
      // default: false,
      // validator: function (value) {
      //     return
      // }
    },
  },
  data() {
    return {
      detailsAreVisibilty: false,
      //   friendIsFavorite: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisibilty = !this.detailsAreVisibilty;
    },
    toggleFavorite() {
      //   this.friendIsFavorite = !this.friendIsFavorite;
      this.$emit("toggle-favorite", this.id);
    },
    deleteFriend(id) {
      this.$emit("delete-friend", id);
      // console.log(id);
    },
  },
};
</script>

<template>
  <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
  <button @click="toggleFavorite()">Toggle Favorite</button>
  <button @click="toggleDetails()">
    {{ detailsAreVisibilty ? "Hide" : "Show" }}
  </button>
  <button @click="deleteFriend(id)">Delete</button>
  <ul v-if="detailsAreVisibilty">
    <li><strong>Phone : </strong>{{ phoneNumber }}</li>
    <li><strong>Mail : </strong>{{ emailAdress }}</li>
  </ul>
</template>

<style></style>
