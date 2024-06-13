import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    totalPages,
    currentPage,
    onPageChange,
}) => {
    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <TouchableOpacity
                    key={i}
                    style={[styles.pageNumber, i === currentPage && styles.currentPageNumber]}
                    onPress={() => onPageChange(i)}
                >
                    <Text style={styles.pageNumberText}>{i}</Text>
                </TouchableOpacity>
            );
        }
        return pageNumbers;
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.arrow}
                onPress={handlePrevPage}
                disabled={currentPage === 1}
            >
                <Text style={styles.arrowText}>{'<'}</Text>
            </TouchableOpacity>
            <View style={styles.pageNumbersContainer}>
                {renderPageNumbers()}
            </View>
            <TouchableOpacity
                style={styles.arrow}
                onPress={handleNextPage}
                disabled={currentPage === totalPages}
            >
                <Text style={styles.arrowText}>{'>'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    pageNumbersContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: '80%',
    },
    pageNumber: {
        padding: 10,
        backgroundColor: '#00ABED',
        borderRadius: 5,
        marginHorizontal: 5,
    },
    currentPageNumber: {
        backgroundColor: '#00ABED',
    },
    pageNumberText: {
        color: 'white',
    },
    ellipsisText: {
        color: '#00ABED',
        fontSize: 16,
        marginHorizontal: 5,
    },
    arrow: {
        padding: 10,
    },
    arrowText: {
        fontSize: 18,
        color: '#00ABED',
    },
});

export default Pagination;