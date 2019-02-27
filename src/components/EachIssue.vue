<template>
  <div>
    <ul id="issues">
      <li class="list">
        <img
          class="imgIssue"
          :src="iss.node.author.avatarUrl"
          alt=""
          width="40px"
        />
        <!-- <p id="login-name"> {{ iss.node.author.login }} </p> -->
        <h3 id="issue"> Issue #{{ iss.node.number }}</h3>
        <p>Title: {{ iss.node.title }}</p>
        <p v-if="iss.node.state === 'OPEN'" id="green"> {{ iss.node.state }}</p>
        <p v-else id="red"> {{ iss.node.state }}</p>
        <p> {{ iss.node.body }}</p>
        <p v-for="reaction in iss.node.reactions.edges" :key="reaction.id">
          <b>Reactions: </b> {{ reaction.node.content }}</p
        >
        <p> </p>
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
#issues {
  position: relative;
  margin-right: 300px;
  margin-left: 300px;
  border: solid;
  border-radius: 30px;

  /* left: 600px; */
}
.list {
  list-style: none;
}
.imgIssue {
  margin-top: 2%;
  margin-right: 3%;
}

#green {
  color: rgb(44, 190, 78);
}
#red {
  color: red;
}
#issue {
  display: inline-block;
  margin-right: 3px;
  margin-left: 3px;
  font-weight: bolder;
}
</style>
