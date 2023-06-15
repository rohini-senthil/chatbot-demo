import axios from 'axios';

export default async function handler(req, res) {

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://1bd9-34-86-147-94.ngrok-free.app/submit-prompt', //replace with ngrok URL
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
