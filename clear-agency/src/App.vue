<template>
  <div id="app">
    <Navbar />
    <Home />
    <Service :service="service" />
    <Know />
    <Portfolio :portfolio="portfolio" />
    <About />
    <Form/>
    <News :newscard="newscard" />
    <Footer />
  </div>
</template>

<script>
import 'boxicons'
export default {
  name: 'App',
  components:{
    'Navbar':require('./components/nav/Navbar.vue').default,
    'Home':require('./components/content/home/home.vue').default,
    'Service':require('./components/content/our-service/service.vue').default,
    'About':require('./components/content/about/about.vue').default,
    'Know':require('./components/content/known/knownmore.vue').default,
    'Portfolio':require('./components/content/portfolio/portfolio.vue').default,
    'Form':require('./components/content/form/form.vue').default,
    'News':require('./components/content/new/news.vue').default,
    'Footer':require('./components/footer/footer.vue').default
  },
  data() {
        return{
            service: [
                {
                  title:'Design',
                  Detail:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quibusdam totam corporis earum inventore unde nulla voluptatibus quidem cumque accusantium?',
                },
                {
                  title:'Development',
                  Detail:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quibusdam totam corporis earum inventore unde nulla voluptatibus quidem cumque accusantium?',
                },
                {
                  title:'Project management',
                  Detail:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quibusdam totam corporis earum inventore unde nulla voluptatibus quidem cumque accusantium?',
                },
                {
                  title:'Testing & QA',
                  Detail:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate quibusdam totam corporis earum inventore unde nulla voluptatibus quidem cumque accusantium?',
                }
            ],
            portfolio:[
              {photo: require('./assets/portfolio/1.jpg')},
              {photo: require('./assets/portfolio/2.jpg')},
              {photo: require('./assets/portfolio/3.jpg')},
              {photo: require('./assets/portfolio/4.jpg')},
            ],
            newscard:[
              {
                title:'Good newspaper Is a Nation talking to it self',
                src:require('./assets/news/1.jpg'),
                date:"12/02/2022",
                writer:"jason norn"
              },
              { title:'Good newspaper Is a Nation talking to it self',
                src:require('./assets/news/2.jpg'),
                date:"12/02/2022",
                writer:"jason norn"
              },
              { title:'Good newspaper Is a Nation talking to it self',
                src:require('./assets/news/3.jpg'),
                date:"12/02/2022",
                writer:"jason norn"
              },
            ]
        }
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

*{
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html{
  width: 100vw;
}
</style>
