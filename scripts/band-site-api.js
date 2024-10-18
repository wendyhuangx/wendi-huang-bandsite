class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://unit-2-project-api-25c1595833b2.herokuapp.com';
        this.headers = {
            'Content-Type': 'application/json',
        };
    }

    //Asynchronous method to post a comment
    async postComment(commentObj){
        try{
            const response = await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`, commentObj, {
                headers:this.headers
            });

        }catch (error){
            console.error('Error posting comment:', error);
        }
    }

    async getComments(){
        try{
            const response = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`,{
                headers:this.headers
            });
            const comments = response.data;

            return comments.sort((a,b) => new Date(b.timestamp)- new Date(a.timestamp));
        }catch (error){
            console.error('Error fetching comments:', error);
        }
    }

    async getShows(){
        try{
            const response= await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`, {
                headers:this.headers
            });
            return response.data;
        }catch{
            console.error('Error fetching shows:', error);
        }
    }
}
const apiKey='98b12e9f-9a99-4479-864a-d50f2fc9a7dc';
const api = new BandSiteApi(apiKey);
