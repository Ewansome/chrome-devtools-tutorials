async function fetchUserData(userId) {
  try {
    const response = await fetch(`/api/user/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer invalid-token'
      }
    });
    return await response.json();
  } catch (error) {
    return null;
  }
}