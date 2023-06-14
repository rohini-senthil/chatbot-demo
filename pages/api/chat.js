import axios from 'axios';

export default async function handler(req, res) {

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://be00-104-199-237-112.ngrok-free.app/submit-prompt', //replace with ngrok URL
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      "prompt": req.body.prompt
    }
  };
  const { data } = await axios.request(config);
  console.log(data);
  res.status(200).json(data)
}
