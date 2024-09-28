import { Outlet } from 'react-router-dom';
import { ErrorFallback, Footer, Header } from '../component';
import { ErrorBoundary } from 'react-error-boundary';

const MainLayout = () => {
    return (
        <ErrorBoundary fallback={<ErrorFallback message="" resetErrorBoundary={() => {}} />}>
            <div className="container mx-auto flex flex-col justify-between items-center p-2 h-screen">
                <Header />
                <div className="content">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </ErrorBoundary>
    );
};

export default MainLayout;