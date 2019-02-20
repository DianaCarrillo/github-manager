<template>
  <div>
    <ul id="issues">
      <li>
        <img :src="iss.node.author.avatarUrl" alt="" width="40px" />
        <!-- <p id="login-name"> {{ iss.node.author.login }} </p> -->
        <h3 id="issue"> Issue #{{ iss.node.number }}</h3>
        <p>Title: {{ iss.node.title }}</p>
        <p v-if="iss.node.state === 'OPEN'" id="green"> {{ iss.node.state }}</p>
        <p v-else="iss.node.state === 'CLOSED'" id="red">
          {{ iss.node.state }}</p
        >
        <p> {{ iss.node.body }}</p>
        <p v-for="node in iss.node.reactions.edges" :key="node.id">
          <b>Reactions: </b> {{ node.node.content }}</p
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EachIssue',
  props: {
    iss: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style>
#issue {
  font-weight: bolder;
}
#issue-list {
  position: relative;
  top: -400px;
}
#issues {
  position: relative;
  border: solid;
  border-radius: 30px;
  margin-right: 500px;
  margin-left: 500px;

  /* left: 600px; */
}
li {
  list-style: none;
}
img {
  margin-top: 2%;
  margin-right: 3%;
}
#login-name {
  position: relative;
  top: -50px;
  left: 50px;
}
#green {
  color: rgb(44, 190, 78);
}
#red {
  color: red;
}
h3 {
  display: inline-block;
  margin-right: 3px;
  margin-left: 3px;
}
</style>
