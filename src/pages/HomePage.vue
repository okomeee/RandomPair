<template>
  <v-ons-page>
    <v-ons-toolbar class="home-toolbar">
      <div class="right">
        <v-ons-toolbar-button @click="ItemPush()">
          追加
        </v-ons-toolbar-button>
      </div>
      <div class="left">
        <v-ons-toolbar-button @click="ItemLoad()">
          読み込み
        </v-ons-toolbar-button>
      </div>
      <div class="center">{{ msg }}</div>
    </v-ons-toolbar>

    <v-ons-list-title class="center" style="text-align: center;">参加者リスト</v-ons-list-title>
    <v-ons-list modifier="inset">
      <v-ons-list-item v-for="(item, index) in items" tappable :key="item.id">
        <div class="center" style="margin: 3px 0;" @click="ItemsPop(index)">{{ item.name }}</div>
      </v-ons-list-item>
    </v-ons-list>

    <router-link :to="{ name: 'result', params: { items } }"><div style="margin: 10px 0px;text-align: center;"><button style="font-size: 20px;margin: 6px 0;">ガチャぽん！</button></div></router-link>

  </v-ons-page>
</template>

<script>
export default {
  name: 'home',
  props: ['lists'],
  data () {
    return {
      msg: 'ランダムでペア作るよ',
      items: [],
      datalist: []
    }
  },
  mounted () {
    if (this.lists) {
      this.items = this.lists
    }
  },
  methods: {
    ItemsPop (index) {
      this.items.splice(index, 1)
    },
    ItemPush () {
      var inputName = prompt('名前の入力')
      if (inputName !== '') {
        this.newName = inputName
        this.items.push({
          name: this.newName
        })
        localStorage.setItem('datalist', JSON.stringify(this.items))
      } else {
        alert('名前を入力してください')
      }
    },
    ItemLoad () {
      this.datalist = JSON.parse(localStorage.getItem('datalist'))
      if (this.datalist) {
        this.items = this.datalist
      }
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
