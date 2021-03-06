import React from 'react'
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import View from '@vkontakte/vkui/dist/components/View/View';
import List from '@vkontakte/vkui/dist/components/List/List';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button'
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar'
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal'
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline'
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline'
import { platform, IOS, ANDROID } from '@vkontakte/vkui';
import PropTypes from 'prop-types';

const osname = platform();


//class Example extends React.Component 
class Example extends React.Component {

    constructor() {
      super()
      this.state = {
        activePanel: 'list',
        removeList: ['Михаил Андриевский', 'Вадим Дорохов', 'Саша Колобов'],
        draggingList: ['Say', 'Hello', 'To', 'My', 'Little', 'Friend']
      };
    }

    render() {
      return (
        <View activePanel={this.state.activePanel}>
          <Panel id="list">
            <PanelHeader>
              Cell
            </PanelHeader>
            <Group header={<Header mode="secondary">Простейший пример</Header>}>
              <List>
                <Cell>Пятница</Cell>
                <Cell>Суббота</Cell>
                <Cell>Воскресение</Cell>
              </List>
            </Group>
            <Group header={<Header mode="secondary">Переходы</Header>}>
              <List>
                <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Учетная запись</Cell>
                <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Основные</Cell>
                <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Приватность</Cell>
              </List>
            </Group>
            <Group header={<Header mode="secondary">Индикатор</Header>}>
              <List>
                <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })} indicator="При использовании">Геолокация</Cell>
                <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })} indicator="Всегда">Автопроигрывание медиа</Cell>
                <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })} indicator="Выключены">Стикеры</Cell>
              </List>
            </Group>
            <Group header={<Header mode="secondary">Многострочность</Header>}>
              <List>
                <Cell multiline>A Series of Unfortunate Events, Archer, Brooklyn Nine-Nine, Doctor Who, Game of Thrones</Cell>
                <Cell multiline>The Avalanches</Cell>
              </List>
            </Group>
            <Group header={<Header mode="secondary">Подпись</Header>}>
              <List>
                <Cell description="Depeche Mode">Where’s the Revolution</Cell>
                <Cell description="The Weeknd">I Feel It Coming (Feat. Daft Punk)</Cell>
              </List>
            </Group>
            <Group header={<Header mode="secondary">Большая ячейка</Header>}>
              <List>
                <Cell
                  before={<Avatar size={72} />}
                  size="l"
                  description="Друзья в Facebook"
                  asideContent={<Icon24MoreHorizontal />}
                  bottomContent={
                    <div style={{ display: 'flex' }}>
                      <Button size="m">Добавить</Button>
                      <Button size="m" mode="secondary" style={{ marginLeft: 8 }}>Скрыть</Button>
                    </div>
                  }
                >
                  Семён Ефимов</Cell>
                <Cell
                  before={<Avatar size={72} />}
                  size="l"
                  description="29 лет, Санкт-Петербург"
                  asideContent={<Icon24MoreHorizontal />}
                  bottomContent={
                    <div style={{ display: 'flex' }}>
                      <Button size="m">Добавить</Button>
                      <Button size="m" mode="secondary" style={{ marginLeft: 8 }}>Скрыть</Button>
                    </div>
                  }
                >
                  Александр Попов</Cell>
                <Cell
                  before={<Avatar size={72} />}
                  size="l"
                  description="Команда ВКонтакте"
                  asideContent={<Icon24MoreHorizontal />}
                  bottomContent={
                    <div style={{ display: 'flex' }}>
                      <Button size="m">Добавить</Button>
                      <Button size="m" mode="secondary" style={{ marginLeft: 8 }}>Скрыть</Button>
                    </div>
                  }
                >
                  Екатерина Скобейко</Cell>
              </List>
            </Group>
            <Group header={<Header mode="secondary">Иконки</Header>}>
              <List>
                <Cell before={<Icon28InfoOutline />}>Информация</Cell>
                <Cell before={<Icon28ServicesOutline />}>Сервисы</Cell>
              </List>
            </Group>
            <Group header={<Header mode="secondary">Чекбоксы</Header>}>
              <List>
               
              </List>
            </Group>
            {this.state.removeList.length > 0 &&
              <Group header={<Header mode="secondary">Удаление</Header>}>
                <List>
                  {this.state.removeList.map((item, index) => (
                    <Cell key={item} removable onRemove={() => {
                      this.setState({
                        removeList: [...this.state.removeList.slice(0, index), ...this.state.removeList.slice(index + 1)]
                      })
                    }}>{item}</Cell>
                  ))}
                </List>
              </Group>
            }
            {this.state.removeList.length > 0 &&
              <Group header={<Header mode="secondary">Перетаскивание</Header>}>
                <List>
                  {this.state.draggingList.map((item) => (
                    <Cell key={item} draggable onDragFinish={({ from, to }) => {
                      const draggingList = [...this.state.draggingList];
                      draggingList.splice(from, 1);
                      draggingList.splice(to, 0, this.state.draggingList[from]);
                      this.setState({ draggingList });
                    }}>{item}</Cell>
                  ))}
                </List>
              </Group>
            }
          </Panel>
          <Panel id="nothing">
              <PanelHeader
                left={
                  <PanelHeaderButton onClick={() => this.setState({ activePanel: 'list' })}>
                    {osname === ANDROID ? <Icon24Back/> : <Icon28ChevronBack/>}
                  </PanelHeaderButton>
                }
              >
                Ничего
              </PanelHeader>
            <div
              style={{
                padding: '100px 0',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  flex: '0 0 auto',
                  color: 'gray',
                  textAlign: 'center'
                }}
              >
                Тут ничего нет<br />
                <span onClick={() => this.setState({ activePanel: 'list' })} style={{ textDecoration: 'underline' }}>Пошли обратно</span>
              </div>
            </div>
          </Panel>
        </View>
      )
    }
  }
  

  var example = new Example()

export default example;