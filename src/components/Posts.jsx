
const Posts = ({posts, loading}) => {
    
  
    if (loading) {
        return <h2>Loadng....</h2>
    }
        
        return <ul className='list_group mb-4'>
            {
                posts.map(post => (
                    <li key={post.id} className='list_group_item'>
                        {post.title}
                    </li>

                ))
            }

        </ul>



}

export default Posts