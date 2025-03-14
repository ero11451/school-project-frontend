import { ReactNode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider, useSelector } from 'react-redux'
import store from './redux-store/store.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { INotificationState } from './redux-store/slice/notificationSlice.tsx'
import React from 'react'
import { FollowingPointerLayout } from './components/ui/following-pointer.tsx'

// Lazy load the MainRouter
import MainRouter from './router/main-router.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <LoadingProvider>
            <FollowingPointerLayout>
              <div className='dark:bg-neutral-900'>
                <Suspense fallback={<div>Loading...</div>}>
                  <MainRouter />
                </Suspense>
              </div>
            </FollowingPointerLayout>
          </LoadingProvider>
        </Provider>
      </QueryClientProvider>
    </React.StrictMode>
  </>,
)

function LoadingProvider({ children }: { children: ReactNode }): ReactNode {
  const isLoading = useSelector((store: { notification: INotificationState }) => store.notification.loading);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>
      )}
      {children}
    </>
  );
}
