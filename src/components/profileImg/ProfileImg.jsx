function ProfileImg({size,img, alt}){
    return(
        <span>
            <img
                src={img}
                alt={alt}
            />
        </span>
    )
}

export default ProfileImg;