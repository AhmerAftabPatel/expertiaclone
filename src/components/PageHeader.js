import React, { Fragment, useState } from 'react'
import { Input, Menu } from 'semantic-ui-react'
/**
* @author
* @function PageHeader
**/

const PageHeader = (props) => {
  const [activeItem,setActiveItem] = useState("home")


  const handleItemClick = () => (e, { name }) => setActiveItem(name)
  return(
    <Fragment>
        <Menu secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </Fragment>
   )

 }

export default PageHeader