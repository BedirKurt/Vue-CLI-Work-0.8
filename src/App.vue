<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "1",
          name: "Bedir",
          phone: "0555 555 5555",
          email: "bedir@vuecli.com",
          isFavorite: false,
        },
        {
          id: "2",
          name: "Julie",
          phone: "0555 555 4444",
          email: "julie@vuecli.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
      // console.log(friendId);
    },
    addNewFriend(name, phone, email, isFavorite) {
      this.friends.push({
        id: this.friends.length + 1,
        name: name,
        phone: phone,
        email: email,
        isFavorite: isFavorite,
      });
    },
    deleteFriend(friendId) {
      this.friends = this.friends.filter((friend) => friend.id !== friendId);
    },
  },
};
</script>

<template>
  <header>
    <h1>My Friendss</h1>
  </header>
  <section>
    <new-friend @new-friends="addNewFriend"></new-friend>
  </section>
  <section>
    <ul>
      <li>
        <friend-contact
          v-for="friend in friends"
          :key="friend.id"
          :id="friend.id"
          :name="friend.name"
          :phone-number="friend.phone"
          :email-adress="friend.email"
          :is-favorite="friend.isFavorite"
          @toggle-favorite="toggleFavoriteStatus"
          @delete-friend="deleteFriend"
        >
        </friend-contact>
      </li>
    </ul>
  </section>
</template>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 5px;
  background-color: #ff0505;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  color: #ff0000;
  text-align: center;
  border-bottom: 2px solid gray;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0000;
  background-color: #ff0000;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  margin-bottom: 2%;
}
#app button:hover,
#app button:active {
  background-color: #ffffff;
  border-color: #4e4e4e;
  color: black;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
/* Form Css */
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  /* margin-right: 1rem; */
  /* width: 7rem; */
  display: inline-block;
  margin: 10px;
  color: red;
}
#app form div {
  margin: 1rem 0;
}

#app form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px auto;

  width: 40rem;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
