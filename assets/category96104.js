import{b as r,f as o,h as c,d as g}from"./usetoast.esm96104.js";class a{static async fetchAll(t){return(await r("/news_categories",t)).data.news_categories}static async getCategoryDetail(t){return(await r(`/news_categories/${t}`)).data.news_category}static async createCategory(t){return(await o("/news_categories",t)).data.news_category}static async deleteCategory(t){return(await c(`/news_categories/${t}`)).data.news_category}}const n=g({id:"category",state:()=>({category:{},categories:[],total_categories:Number}),getters:{allCategories:e=>e.categories,getTotalCategories:e=>e.categories?e.categories.length:0,getCurrentCategory:e=>e.category},actions:{async fetchAllCategories(e){await a.fetchAll(e).then(t=>this.categories=t)},async fetchCategoryDetail(e){await a.getCategoryDetail(e).then(t=>this.category=t)},async createCategory(e){await a.createCategory(e).then(t=>this.category=t)},async deleteCategory(e){await a.deleteCategory(e).then(t=>this.category=t)}}});export{n as u};
