function Image({img, css, alt}) {
  return (
    ( !img )?
        <h4>NO IMAGE</h4>
        :
    <img src={img} className={css} alt={alt} loading="lazy" />
  )
}

Image.defaultProps = {
    css : "img",
    alt: 'Let \'s reason'

}

export default Image

