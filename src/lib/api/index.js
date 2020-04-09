export const getAccessToken = async () => {
  try {
    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ZWNlZWMyMWNiNDgzNDlmMGJkOWQ3ZjVlY2FmYzE0MzQ6Njc1M2ZlNzU4YWMzNDIxZDhmNDQyOGU3MzBlZDBmYjE=',
      },
      body: 'grant_type=client_credentials',
    });
    if (res.ok) {
      const jsonRes = await res.json();
      return jsonRes;
    }
  } catch (error) {
    console.log(error);
  }
};
export const fetchTracks = async (trackName) => {
  try {
    const results = await getAccessToken();
    if (results) {
      const res = await fetch(
        `https://api.spotify.com/v1/search?q=${trackName}&type=track`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'applocation/json',
            Authorization: `Bearer ${results['access_token']}`,
          },
        }
      );

      if (res.ok) {
        const jsonRes = await res.json();
        return jsonRes;
      }
    }
  } catch (error) {
    console.log(error);
  }
};
