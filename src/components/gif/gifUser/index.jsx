import './gifUser.css'

export function GifUser({ user, visible, list }) {
  let emptyUser = user === undefined ? true : false

  return (
    <div className={`GifUser__bg${!visible ? " GifUser__bg--none" : ""}`}>
      {
        !emptyUser 
          ?
            <div className='GifUser'>
              <img src={user.avatar_url} alt={user.display_name} className="GifUser__avatar" />

              {
                list
                 ?
                  <div className="GifUser__info">
                    <h4 className="GifUser__name">{user.display_name}</h4>
                    <h3 className="GifUser__username">@{user.username}</h3>
                  </div> 
                  : null
              }
            </div>
          : 
            <div  className='GifUser'>
              <p className='noUser'>De usuario no registrado</p>
            </div> 
      }
      </div>
    )
  }
  