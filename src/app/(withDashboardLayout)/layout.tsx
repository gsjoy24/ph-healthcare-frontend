import DashboardDrawer from '@/components/dashboard/DashboardDrawer/DashboardDrawer';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return <DashboardDrawer>{children}</DashboardDrawer>;
};

export default DashboardLayout;
