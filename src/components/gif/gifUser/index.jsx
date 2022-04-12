import './gifUser.css'

export function GifUser({ user, visible }) {
  console.log(visible);
  let emptyUser = false
  
  if (user === undefined) {
    emptyUser = true
  }

  return (
    <div className={`GifUser__bg${!visible ? " GifUser__bg--none" : ""}`}>
      {
        !emptyUser 
          ?
            <div className='GifUser'>
              <img src={user.avatar_url} alt={user.display_name} className="GifUser__avatar" />

              <div className="GifUser__info">
                <h4 className="GifUser__name">{user.display_name}</h4>
                <h3 className="GifUser__username">@{user.username}</h3>
              </div> 
            </div>
          : 
            <div  className='GifUser'>
              <p className='noUser'>Anonymous user</p>
            </div> 
      }
      </div>
    )
  }
  