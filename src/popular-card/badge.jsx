import"./badge.scss"

const Badge =({isleft,  isright, content, ...props}) =>{

  const style = isleft
    ?{
        left:0,
        borderTopLeftRadius: "var(--border-radius)",
        borderBottomRightRadius: "var(--border-radius)",
       }
    :{
        right:0, 

        borderTopRightRadius: "var(--border-radius)",
        borderBottomLeftRadius: "var(--border-radius)" ,

        }
        return(
            <span className="badge" style={{...style, ...props.style}}>
                {content}
                 
            </span>
        )
    } 
    
    

export default Badge