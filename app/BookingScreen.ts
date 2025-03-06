import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    paddingTop:36,
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 500,
    fontFamily: 'Popping-Bold',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  seatingLayout: {
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  seatDesc: {
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 14
  },
  stageText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 30,
    backgroundColor: '#E6E6E6',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  platinumSection: {
    height: 40,
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
  },
  goldSection: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center'
  },
  silverSection: {
    height: 80,
    width: '100%',
    justifyContent: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    textAlign: 'center'
  },
  ticketSelection: {
    marginBottom: 16,
    width: '100%',
  },
  ticketRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EEE6F9',
    paddingVertical: 18,
    width: '100%',
    paddingHorizontal: 8,
  },
  ticketClass: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontWeight: 400,
    lineHeight: 21,
    marginLeft: 4
  },
  ticketClassSection: {
    flexDirection: 'row',
    flex: 1, 
    marginRight: 16,
    maxWidth: '100%',
  },
  seatControls: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 0,
  },
  seatAvailabiltyText: {
     color: '#FF935B',
     fontFamily: 'Poppins-Regular',
     fontWeight: 400,
     marginLeft: 20
  },
  controlButton: {
    fontSize: 18,
    paddingHorizontal: 8,
  },
  seatCount: {
    fontSize: 16,
    marginHorizontal: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 30,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  totalContainer: {
    flexDirection: 'column',
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  rupeeIcon: {
    color: '#7E2CCF',
  },
  redText: {
    color: '#7E2CCF',
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: 20
  },
  totalSeatsText: {
    color: '#757575',
    fontWeight: 400,
    fontFamily: 'Poppins-Regular'
  },
  taxText: {
    color: '#757575',
    fontWeight: 400,
    fontFamily: 'Poppins-Regular',
    marginTop: 4
  },
  proceedButton: {
    backgroundColor: '#7E2CCF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  proceedButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});