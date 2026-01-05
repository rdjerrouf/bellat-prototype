import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { getMockOrders } from '@/lib/data/mock-orders';
import Link from 'next/link';
import { format } from 'date-fns'; // For date formatting
import { Badge } from '@/components/ui/Badge'; // Assuming Badge component is available

// This is the Admin Dashboard page. It's a Server Component that fetches
// mock data to display an overview of the platform's activity.
export default async function AdminDashboardPage() {
  // Fetch all mock orders.
  const orders = await getMockOrders();

  // Static metrics as per the functional specification.
  const ordersToday = 12;
  const revenueToday = 15240;
  const pendingOrders = 5;

  // Get the 5 most recent orders for the "Recent Orders" table.
  // Sort by date (newest first) and take the first 5.
  const recentOrders = orders
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  // Helper function to get status badge variant based on order status.
  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'pending': return 'warning';
      case 'confirmed': return 'info';
      case 'delivered': return 'success';
      case 'cancelled': return 'danger';
      default: return 'default';
    }
  };

  // Helper function to translate order status for display.
  const translateStatus = (status: string) => {
    switch (status) {
      case 'pending': return '⏳ En attente';
      case 'confirmed': return '✓ Confirmé';
      case 'preparing': return '📦 En préparation';
      case 'out_for_delivery': return '🚚 En livraison';
      case 'delivered': return '✅ Livré';
      case 'cancelled': return '❌ Annulé';
      default: return status;
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Tableau de bord</h1>

      {/* Top Stats Cards: Displaying key metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Commandes aujourd'hui</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{ordersToday}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Revenus aujourd'hui</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{revenueToday} DZD</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Commandes en attente</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{pendingOrders}</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders Section: Displaying a table of the most recent orders */}
      <Card>
        <CardHeader>
          <CardTitle>Commandes récentes</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    N°
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Statut
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {/* Link to order detail page (non-functional in prototype) */}
                      <Link href={`/admin/orders/${order.id}`} className="text-bellat-red hover:underline">
                        {order.id}
                      </Link>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.customer_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {format(new Date(order.date), 'dd/MM/yyyy')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {order.total} DZD
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <Badge variant={getStatusVariant(order.status)}>
                        {translateStatus(order.status)}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
