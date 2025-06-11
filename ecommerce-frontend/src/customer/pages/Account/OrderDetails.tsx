import { Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import OrderStepper from './OrderStepper';
import { Payments } from '@mui/icons-material';

const OrderDetails = () => {
    const navigate = useNavigate();
    
    // Sample data that could come from props or API
    const orderData = {
        product: {
            image: "https://m.media-amazon.com/images/I/41ZGr7L-byL._AC_FMavif_UC231,231_CACC,231,231_QL58_.jpg?aicid=community-reviews",
            seller: "C J Enterprise",
            type: "Banarasi Silk Saree",
            description: "Festive Wear Saree | Occasional Wear Saree | Traditional Wear Saree | Wedding Wear Saree | Reception Wear Saree | Butta Sarees Latest Design",
            price: 799,
            discount: 699,
        },
        deliveryAddress: {
            name: "Ecom",
            phone: "9485600345",
            address: "Gandhi ward, Warthi, Maharashtra - 441905"
        },
        status: "SHIPPED",
        seller: "SOCH APPARELS PVT LTD",
        isCancelled: false
    };

    return (
        <Box sx={{ p: 2 }}>
            <Box sx={{ mb: 4 }} />

            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 3, 
                alignItems: 'center',
                mb: 4
            }}>
                <img 
                    src={orderData.product.image} 
                    alt={orderData.product.type} 
                    style={{ 
                        width: 100, 
                        height: 100, 
                        objectFit: 'cover',
                        borderRadius: 1
                    }} 
                />

                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="bold">
                        {orderData.product.seller}
                    </Typography>
                    <Typography variant="body2">
                        <strong>Type: </strong>{orderData.product.type}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        {orderData.product.description}
                    </Typography>
                </Box>

                <Button 
                    onClick={() => navigate(`/reviews/${5}/create`)}
                    variant="outlined"
                    size="small"
                >
                    Write Review
                </Button>
            </Box>

            <Box sx={{ border: 1, borderColor: 'divider', p: 3, mb: 3, borderRadius: 1 }}>
                <OrderStepper orderStatus={orderData.status} />
            </Box>

            <Box sx={{ border: 1, borderColor: 'divider', p: 3, mb: 3, borderRadius: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Delivery Address
                </Typography>
                <Box sx={{ fontSize: '0.875rem' }}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 1 }}>
                        <Typography fontWeight="medium">{orderData.deliveryAddress.name}</Typography>
                        <Divider orientation="vertical" flexItem />
                        <Typography>{orderData.deliveryAddress.phone}</Typography>
                    </Box>
                    <Typography>{orderData.deliveryAddress.address}</Typography>
                </Box>
            </Box>

            <Box sx={{ border: 1, borderColor: 'divider', borderRadius: 1 }}>
                <Box sx={{ p: 3 }}>
                    <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        mb: 2
                    }}>
                        <Box>
                            <Typography fontWeight="bold">Total Item Price</Typography>
                            <Typography variant="caption" color="success.main">
                                You saved ₹{orderData.product.discount}.00 on this item
                            </Typography>
                        </Box>
                        <Typography fontWeight="medium">₹{orderData.product.price}.00</Typography>
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <Box sx={{ 
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            bgcolor: 'teal.50',
                            px: 3,
                            py: 2,
                            borderRadius: 1
                        }}>
                            <Payments fontSize="small" />
                            <Typography variant="caption" fontWeight="medium">
                                Pay on Delivery
                            </Typography>
                        </Box>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="caption">
                        <strong>Sold by: </strong> {orderData.seller}
                    </Typography>
                </Box>

                <Box sx={{ p: 3 }}>
                    <Button
                        disabled={orderData.isCancelled}
                        color="error"
                        variant="outlined"
                        fullWidth
                        sx={{ py: 1.5 }}
                    >
                        {orderData.isCancelled ? 'Order Cancelled' : 'Cancel Order'}
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default OrderDetails;