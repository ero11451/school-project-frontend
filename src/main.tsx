import  { ReactNode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider, useSelector } from 'react-redux'
import store from './redux-store/store.tsx'
import MainRouter from './router/main-router.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { INotificationState } from './redux-store/slice/notificationSlice.tsx'


const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        retry: 0,
      },
    },
  }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>Loading...</div>}>
          <Provider store={store}>
            <LoadingProvider>

              <div className=' dark:bg-neutral-900'>
                <MainRouter />
              </div>
            </LoadingProvider>
          </Provider>
        </Suspense>
      </QueryClientProvider>
    </React.StrictMode>
  </>,
)


function LoadingProvider({ children }: { children: ReactNode }): ReactNode {

  const data = useSelector((store: { notification: INotificationState }) => store.notification.loading);

  return (<>
    {data && <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce animation-delay-200"></div>
        <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce animation-delay-400"></div>
      </div>
    </div>
}
    {children}
  </>)
}