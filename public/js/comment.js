async function newFormHandler(event) {
    event.preventDefault();     
    console.log(window.location.pathname)

    const comment_content = document.querySelector('#review-desc').value;
    const id = window.location.pathname.split("/")[2]
    console.log(id)
      console.log(comment_content)
      const response = await fetch(`/api/comment`, {        
        method: 'POST',
        body: JSON.stringify({ comment_content, id: parseInt(id) }),
        headers: {
          'Content-Type': 'application/json',
        },
      });  

      if (response.ok) {
        console.log("created sccusesl")
        location.reload()
      } else {
        alert('Failed to post review');
      }
    }
  
  
  document
    .querySelector('.new-review-form')
    .addEventListener('submit', newFormHandler);
  

    const containerEl = document.getElementById('comment-footer');

    const clickHandler = function(event) {
      event.preventDefault();   
      let count = parseInt(event.target.getAttribute('data-count'));
    
      if (event.target.matches('button')) {
        count++;
        
        event.target.setAttribute('data-count', count);
    
        event.target.textContent = `Likes: ${count}`;
      }
    
    };
    
    containerEl.addEventListener('click', clickHandler);
    
 
  