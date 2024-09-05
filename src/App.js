import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useEffect, useRef, useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import apiRequest from './apiRequest';

function App() {

  const addRef = useRef(null);

  const API_URL = 'https://66d83bdc37b1cadd8053ed22.mockapi.io/items';

  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState("")
  const [search, setSearch] = useState("")
  const [fetchError, setFetchError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const searchRef = useRef(null)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not received")
        const listItems = await response.json();
        setItems(listItems)
        setFetchError(null)
      } catch (err) {
        setFetchError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())()
    }, 2000);
  }, [])

  const addItem = async () => {
    const taskLen = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id: taskLen, checked: false, activity: newItem };
    const update = [...items, addNewItem];
    setItems(update);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addNewItem)
    }
    const result = await apiRequest(API_URL, postOptions)
    if (result) setFetchError(result)
    removeAddItem()
  }

  const check = async (id) => {
    const newArr = items.map((arrVal) =>
      arrVal.id === id ? { ...arrVal, checked: !arrVal.checked } : arrVal);
    setItems(newArr);

    const ChangeItem = newArr.filter((item) =>
      item.id === id)

    const updateOption = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: ChangeItem[0].checked })
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl, updateOption)
    if (result) setFetchError(result)
  }

  const deleteButton = async (delTask) => {
    const newItem = items.filter((del) =>
      del.id !== delTask)
    setItems(newItem);

    const deleteOption = { method: 'DELETE' }

    const reqUrl = `${API_URL}/${delTask}`
    const result = await apiRequest(reqUrl, deleteOption)
    if (result) setFetchError(result)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem();
    setNewItem("")
  }

  const addAddItem = () => {
    if (addRef.current) {
      addRef.current.style.right = '200px';
    }
  }

  const removeAddItem = () => {
    if (addRef.current) {
      addRef.current.style.right = '-200px';
      setNewItem("")
    }
  }

  return (
    <div className='main-div'>
      <Header title="To Do List" />
      <main>
        <SearchItem
          search={search}
          setSearch={setSearch}
          addAddItem={addAddItem}
          searchRef={searchRef}
        />
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
          addItem={addItem}
          addRef={addRef}
          removeAddItem={removeAddItem}
          searchRef={searchRef}
        />
        {isLoading && <p className='errors'>Loading Items..</p>}
        {fetchError && <p className='errors'>{`Error: ${fetchError}`}</p>}
        {!isLoading && !fetchError && <Content
          items={items.filter(item => item.activity.toLowerCase().includes(search.toLowerCase()))}
          check={check}
          deleteButton={deleteButton}
        />}
      </main>
      <Footer length={items.length} />
    </div>
  )
}

export default App;