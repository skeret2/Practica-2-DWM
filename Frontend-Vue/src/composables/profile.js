import { ref } from "vue"
import axios from 'axios'
import { useRouter } from 'vue-router'

axios.defaults.baseURL = "http://127.0.0.1:8000/api/profile";

export default function useProfile(){
    const profiles = ref([]);

    const getProfile =async() => {
        const reponse =await axios.get("http://127.0.0.1:8000/api/profile");
        profiles.value = reponse.data.data;
    };

}