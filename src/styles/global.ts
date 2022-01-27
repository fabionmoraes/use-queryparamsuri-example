import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap');
* {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }
  a {
  text-decoration: none;
  transition-duration: 0.5s;
}
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: #eee;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;
    height: 100%;
    width: 100%;
  }
  button, input, textarea {
    font-family: 'Roboto', sans-serif;
  }
  button {
    cursor: pointer;
  }
  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
  }
  table {
    border-collapse: collapse;
    flex: 1;
  }
  select option {
    font-size: 16px;
  }
  table {
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: grey;
    font-size: 12px;
    width: 100%;
  }
  thead {
    font-weight: bold;
    color: #0085B2;
    font-size: 14px;
  }
  thead tr td {
    padding: 10px;
  }
  tbody tr td {
    padding: 10px;
  }
  .table-striped tbody tr:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.05);
  }
  .table-hover tbody tr:hover {
    background-color: rgba(0, 0, 0, 0.075);
  }
  .content {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-left: 24px;
    padding-right: 24px;
    align-items: center;
    justify-content: center;
  }
  .logo {
    img {
      width: 200px;
      margin-bottom: 14px;
    }
  }
  .card {
    width: 100%;
    max-width: 1200px;
    background-color: #fff;
    border-radius: 8px;
    padding: 12px;
  }
`
