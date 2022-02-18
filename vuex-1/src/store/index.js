import axios from 'axios';
import { createStore } from 'vuex'


export default createStore({
  state: {
    counter: 0,
    history:[0]
  },
  mutations: {
    addToCounter(state,payload){
      state.counter = state.counter + payload;
      state.history.push(state.counter)
    },
    subtractFromCounter(state, payload){
      state.counter = state.counter - payload;
      state.history.push(state.counter)
    }
  },
  actions: {
    async addRandomNumber(context) {
      let data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new");
      console.log(data);
      context.commit("addToCounter", data.data);
    }
  },
  getters:{
    activeIndex: (state) => (payload) => {
      let indexes = [];
      state.history.forEach((number, index)=>{
        if(number === payload){
          indexes.push(index)
        }
      })
      return indexes;
    }
  },
  modules: {
  }
})
