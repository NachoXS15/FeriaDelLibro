type CategoryCard = {
  title1: string
  title2: string
  bg_color: string
}

export default function CategoryCard({title1, title2, bg_color}: CategoryCard) {
  const style = {
    backgroundColor: `${bg_color}`
  }
  
  return (
    <>
        <div className="category-card">
          <div className="shape" style={style}>
            <h4>{title1}</h4>
            <h1>{title2}</h1>
          </div>
        </div>
    </>
  )
}
