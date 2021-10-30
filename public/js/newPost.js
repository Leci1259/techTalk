const newPostHandler = async function(event) {
    event.preventDefault();
  
    const title = $('.post-title').val();
    const body = $r('.post-text').val();
  
    await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/dashboard');
  };
  
  document
    $('#newPostForm').on('submit', newPostHandler);
  