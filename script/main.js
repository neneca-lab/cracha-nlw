const link_social_media = {
  github: 'SonecaS2',
  youtube: '7zY5dIcO4_fkmCBV8n_8Ow',
  facebook: 'Huan Dos Santos',
  instagram: 'huan.js',
  twitter: 'HuanSalomao'
}

function change_social_media_links (){
  for (let li of social_links.children) {
    const social = li.getAttribute('class')
    
    li.children[0].href = `https://${social}.com/${link_social_media[social]}`
  }
}

change_social_media_links()

function get_github_profile_infos(){
  const url = `https://api.github.com/users/${link_social_media.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    user_name.textContent = data.name
    user_bio.textContent = data.bio
    user_link.href = data.login
    user_image.src = data.avatar_url
  })
}

get_github_profile_infos()