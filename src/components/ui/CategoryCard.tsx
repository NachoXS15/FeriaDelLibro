import { CategoryCardProps } from "../../config/types/CategoryCardProps"
import { NavLink } from "react-router-dom"

export default function CategoryCard({ title1, title2, bg_img, categoryLink }: CategoryCardProps) {
  const style = {
    backgroundImage: `url(${bg_img})`,
    color: 'white'
  }

  return (
    <div className="category-card">
      <NavLink className="shape" style={style} to={`/library/${categoryLink}`}>
        <h4>{title1}</h4>
        <h1>{title2}</h1>
      </NavLink>
    </div>
  )
}