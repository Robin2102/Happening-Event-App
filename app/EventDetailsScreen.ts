import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bannerContainer: {
    height: 300,
    position: 'relative',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 10,
    flexDirection: 'row',
    width: '100%',
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 26,
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'center',
    borderRadius: 6
  },
  activeTab: {},
  tabText: {
    color: '#757575',
  },
  activeTabText: {
    color: '#7E2CCF',
  },
  content: {
    padding: 16,
    marginBottom: 80,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: 'Poppins-Bold',
    marginVertical: 16,
    color: '#333',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 16,
    gap: 20
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  iconTeaserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#EEE6F9',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10
  },
  iconTextPrimary: {
    fontSize: 14,
    color: '#7E2CCF',
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  iconText: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  iconText1: {
    fontSize: 14,
    color: '#FF935B',
  },
  detailsContainer: {},
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  detailRowBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 18
  },
  detailText: {
    fontSize: 14,
    color: '#757575',
    fontFamily: 'Poppins-Regular',
    lineHeight: 21
  },
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
    marginBottom: 12,
    color: '#757575',
  },
  languageText: {
    fontSize: 14,
    color: '#757575',
    fontFamily: 'Poppins-Regular',
    lineHeight: 21
  },
  dateText: {
    fontSize: 14,
    color: '#757575',
    fontFamily: 'Poppins-Regular',
    lineHeight: 21,
  },
  timeText: {
    fontSize: 14,
    color: '#757575',
    fontFamily: 'Poppins-Regular',
    lineHeight: 21,
    backgroundColor: '#F1E6FF',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 120
  },
  priceText: {
    fontSize: 14,
    color: '#757575',
    fontFamily: 'Poppins-Regular',
    lineHeight: 21
  },
  locationCard: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E8DFF4',
    paddingVertical: 26,
    paddingHorizontal: 16,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  locationTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#757575',
    fontFamily: 'Poppins-Bold'
  },
  seatInfo: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  seatText: {
    fontSize: 14,
    color: '#FF935B'
  },
  nearbyIcon: {
    marginRight: 16,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },
  bullet: {
    color: '#7E2CCF',
    fontWeight: 'bold',
  },
  listText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#757575',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingBottom:30,
    borderTopColor: '#eee',
  },
  bookButton: {
    backgroundColor: '#7E2CCF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 63,
    left: 16,
    zIndex: 1,
  },
  shareButton: {
    position: 'absolute',
    top: 63,
    right: 16,
    zIndex: 1,
  },
});