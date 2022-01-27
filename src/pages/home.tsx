import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import { queryParams, queryURI } from 'queryparamsuri'

import { IHandleSearch, Popover } from '../components/Popover'

import logo from '../assets/logo.png'

const arrRole = ['Frontend', 'Backend', 'FullStack']
const arrLevel = ['Junior', 'Midweight', 'Senior']

export const Home: React.FC = () => {
  const [works, setWorks] = useState<any[]>([])
  const { searchURI, query } = queryParams({
    params: ['company_like', 'position_like', 'role_like', 'level_like'],
  })
  const navigation = useNavigate()

  useEffect(() => {
    async function loadWorks() {
      const response = await axios.get(
        `http://localhost:5000/works${searchURI}`,
      )

      setWorks(response.data)
    }

    loadWorks()
  }, [searchURI])

  const handleSearch = (values: IHandleSearch) => {
    const params = queryURI({
      name: values.name,
      value: values.search,
    })

    navigation(params)
  }

  return (
    <div className="content">
      <div style={{ marginBottom: 16 }}>URI: {searchURI}</div>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="card">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <td>#</td>
              <td>
                company{' '}
                <Popover
                  handleSearch={handleSearch}
                  researched={query.company_like}
                  name="company_like"
                />
              </td>
              <td>
                position{' '}
                <Popover
                  handleSearch={handleSearch}
                  researched={query.position_like}
                  name="position_like"
                />
              </td>
              <td>
                role{' '}
                <Popover
                  handleSearch={handleSearch}
                  researched={query.role_like}
                  name="role_like"
                  option={arrRole}
                />
              </td>
              <td>
                level{' '}
                <Popover
                  handleSearch={handleSearch}
                  name="level_like"
                  researched={query.level_like}
                  option={arrLevel}
                />
              </td>
              <td align="right">Ação</td>
            </tr>
          </thead>
          <tbody>
            {works.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.company}</td>
                <td>{item.position}</td>
                <td>{item.role}</td>
                <td>{item.level}</td>
                <td align="right">Action</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
