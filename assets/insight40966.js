import{aa as i,ao as e,an as h,a9 as o}from"./usetoast.esm40966.js";import"./helpers40966.js";class s{static async fetchAll(t){return(await i("/insights",t)).data.insights}static async getInsightDetail(t){return(await i(`/insights/${t}`)).data.news_insight}static async updateInsight(t){return(await e(`/insights/${t.id}/update`,t.formData)).data.news_insight}static async deleteInsight(t){return(await h(`/insights/${t}`)).data.news_insight}static async importTarget(t){return(await e(`/insights/${t.id}/upload_target`,t.formData)).data.updated_targets}static async insightRanking(t){return(await i("/insights/ranking",t)).data.ranking}static async downloadRanking(t){return(await i("/insights/download_ranking",t)).data.ranking}}const g=localStorage.getItem("rankingNavParams"),c=g?JSON.parse(g):null,l=o({id:"insight",state:()=>({insights:{},ranking:[],num_target:"",ranking_params:c}),getters:{getCurrentInsights:a=>a.insights,getCurrentRanking:a=>a.ranking,getNumTarget:a=>a.num_target,getRankingParams:a=>a.ranking_params},actions:{async fetchAllInsights(a){await s.fetchAll(a).then(t=>this.insights=t)},async fetchInsightDetail(a){await s.getInsightDetail(a).then(t=>this.insights=t)},async updateInsight(a){await s.updateInsight(a).then(t=>this.insights=t)},async deleteInsight(a){await s.deleteInsight(a).then(t=>this.insights=t)},async importTarget(a){await s.importTarget(a).then(t=>this.num_target=t)},async getInsightsRanking(a){await s.insightRanking(a).then(t=>{let n=1;t.forEach(r=>{r.id=n,n++}),this.ranking=t})},async downloadRanking(a){await s.insightRanking(a).then(t=>{})},saveRankingParams(a){this.ranking_params=a,localStorage.setItem("rankingNavParams",JSON.stringify(this.ranking_params))}}});export{l as u};
