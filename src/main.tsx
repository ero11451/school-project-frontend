import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import store from './redux-store/store.tsx'
import MainRouter from './router/main-router.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
          <div className=' dark:bg-neutral-900'>
            <MainRouter />
          </div>
        </Provider>
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>,
)
