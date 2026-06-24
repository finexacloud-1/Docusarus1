import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Clientes',
      items: [
        'clientes/crear-cliente',
        'clientes/editar-cliente',
        'clientes/eliminar-cliente',
      ],
    },
    {
      type: 'category',
      label: 'Cotizaciones',
      items: [
        'cotizaciones/crear-cotizacion',
        'cotizaciones/editar-cotizacion',
        'cotizaciones/eliminar-cotizacion',
        'cotizaciones/halar-cotizacion',
      ],
    },
    {
      type: 'category',
      label: 'Productos',
      items: [
        'productos/crear-producto',
        'productos/ajustar-existencia',
        'productos/ver-movimiento',
        'productos/crear-movimiento',
      ],
    },
    {
      type: 'category',
      label: 'Facturas',
      items: [
        'facturas/factura-contado',
        'facturas/factura-credito',
        'facturas/pre-factura',
        'facturas/localizar-factura',
        'facturas/editar-factura',
        'facturas/eliminar-factura',
        'facturas/devolucion',
      ],
    },
    {
      type: 'category',
      label: 'Recibos de Pago',
      items: [
        'recibos/recibo-cxc',
        'recibos/recibo-apartado',
        'recibos/localizar-ver-recibo',
        'recibos/eliminar-recibo-ingreso',
        'recibos/eliminar-recibo-apartado',
      ],
    },
    {
      type: 'category',
      label: 'CxC',
      items: [
        'cxc/nota-credito',
        'cxc/nota-debito',
      ],
    },
    {
      type: 'category',
      label: 'CxP',
      items: [
        'cxp/crear-suplidor',
        'cxp/editar-suplidor',
      ],
    },
    {
      type: 'category',
      label: 'Cuadre de Caja',
      items: [
        'cuadre-caja/hacer-cuadre',
        'cuadre-caja/localizar-ver-cuadre',
        'cuadre-caja/editar-cuadre',
        'cuadre-caja/eliminar-cuadre',
      ],
    },
  ],
};

export default sidebars;
