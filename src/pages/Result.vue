<template>
  <v-ons-page>
    <v-ons-toolbar class="home-toolbar">
      <div class="center">{{ msg }}</div>
    </v-ons-toolbar>

  <v-ons-list-title class="center" style="margin: 24px;"></v-ons-list-title>
    <v-ons-list modifier="inset">
      <v-ons-list-item v-for="(team,index) in teams" tappable :key="index">
        <div class="center" style="margin: 3px 3px;" v-for="(t,index) in team" :key="index">/ {{ t.name }}</div>
      </v-ons-list-item>
    </v-ons-list>

    <router-link :to="{name: 'home', params:{lists}}"><div style="margin: 10px 0px;text-align: center;"><button modifier="cta" style="font-size: 20px;margin: 6px 0;">戻る</button></div></router-link>

  </v-ons-page>
</template>

<script>
export default {
  name: 'result',
  props: ['items'],
  data () {
    return {
      msg: '結果発表',
      lists: [],
      teams: []
    }
  },
  mounted () {
    if (this.items) {
      this.lists = this.items
    }
    if (this.items === '') {
      this.$ons.notification.alert('参加者を追加してください')
    }
    var test = this.lists.slice()
    var len = this.lists.length
    if (len % 2 !== 0) {
      var r = test[Math.floor(Math.random() * test.length)]
      test.splice(test.indexOf(r), 1)
      this.teams.push([r])
    }
    len = test.length
    for (var i = 0; i < len / 2; i++) {
      var p = test[Math.floor(Math.random() * test.length)]
      test.splice(test.indexOf(p), 1)
      var q = test[Math.floor(Math.random() * test.length)]
      test.splice(test.indexOf(q), 1)
      var arr = [p, q]
      this.teams.push(arr)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  text-align: center;
}

img {
  max-width: 300px;
}

ons-list-title {
  text-transform: none;
}

ons-list-title:not(:first-of-type) {
  margin-top: 30px;
}

ons-card {
  text-align: center;
}

ons-list-item,
ons-card {
  cursor: pointer;
}
</style>
