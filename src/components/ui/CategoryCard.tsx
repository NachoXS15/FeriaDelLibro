import { CategoryCardProps } from "../../config/types/CategoryCardProps"

export default function CategoryCard({title1, title2, bg_color, bg_img}: CategoryCardProps) {
  const style = {
    backgroundImage: `url(${bg_img})`,
    // backgroundColor: `${bg_color}`,
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
