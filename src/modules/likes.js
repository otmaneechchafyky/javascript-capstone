export default class Likes {
  static likeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/sSOo1SGKw5gz6ax9ywvh/likes';

  static postLike = async (id) => {
    const res = await fetch(this.likeUrl, {
      method: 'POST',
      headers: { 'Content-type': 'application/JSON' },
      body: JSON.stringify({ item_id: id }),
    });
    const like = await res.text();
    return like;
  }

  static fetchLike = async () => {
    const res = await fetch(this.likeUrl);
    const like = await res.json();
    return like;
  }
}