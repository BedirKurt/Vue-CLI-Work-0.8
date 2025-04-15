<script>
export default {
  emits: ["new-friends"],
  data() {
    return {
      newName: "",
      newEmail: "",
      newPhone: "",
      newIsFavorite: null,
    };
  },
  methods: {
    addFriend() {
      this.$emit(
        "new-friends",
        this.newName,
        this.newPhone,
        this.newEmail,
        this.newIsFavorite
      );
      this.newName = "";
      this.newPhone = "";
      this.newEmail = "";
      this.newIsFavorite = false;
    },
  },
};
</script>

<template>
  <div>
    <h2>Friend Form</h2>
    <form @submit.prevent>
      <div>
        <label>Name</label>
        <input type="text" v-model="newName" />
      </div>

      <div>
        <label>Phone</label>
        <input type="text" v-model="newPhone" />
      </div>

      <div>
        <label>Email</label>
        <input type="text" v-model="newEmail" />
      </div>

      <div>
        <label>Favorite</label>
        <input type="checkbox" v-model="newIsFavorite" />
      </div>

      <div>
        <button @click="addFriend()">Add Friend</button>
      </div>
    </form>
  </div>
</template>

<style></style>
