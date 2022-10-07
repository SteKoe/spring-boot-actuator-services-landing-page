import axios from "axios";
import {Agent} from "https";

const httpsAgent = new Agent({ rejectUnauthorized: false });
export default axios.create({
    httpsAgent,
})