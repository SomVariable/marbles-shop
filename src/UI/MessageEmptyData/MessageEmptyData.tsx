import React from 'react'
import styles from './MessageEmptyData.module.scss'

function MessageEmptyData() {
  return (
    <div className = {styles.message}>Нет данных для отображения</div>
  )
}

export default MessageEmptyData