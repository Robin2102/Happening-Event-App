import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 2,
    width: '70%'
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7E2CCF',
    fontFamily: 'PostNoBillsJaffna-ExtraBold',
  },
  notificationBell: {
    position: 'relative',
  
  },
  badge: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: '#7E2CCF',
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  localtionNamesSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  locationSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 18,
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#F9F5FD',
    borderRadius: 10
  },
  cityText: {
    marginLeft: 8,
    color: '#7E2CCF',
    fontWeight: 500,
    fontSize: 14
  },
  locationText: {
    marginLeft: 8,
    color: '#000000',
    fontSize: 12,
    fontWeight: 400
  },
  tabsContainer: {
    flexDirection: 'row',
    marginVertical: 8,
    justifyContent: 'center'
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#EEE6F9'
  },
  activeTab: {
    borderWidth: 1,
    backgroundColor: '#F9F5FD',
    borderColor: '#7E2CCF'
  },
  tabText: {
    color: '#666',
  },
  activeTabText: {
    color: '#7E2CCF',
  },
  section: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 16,
    color: '#3C3C3C',
    fontFamily: 'Poppins-Bold'
  },
  categoryCard: {
    width: 90,
    height: 90,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    marginRight: 18
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  categoryTitle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    paddingVertical: 3,
    color: '#5A5A5A',
    backgroundColor: '#F9F5FDE5',
    fontSize: 14,
    fontWeight: 500,
    textShadowRadius: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  footerIcon: {
    padding: 8,
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  horizontalCard: {
    width: 200,
    marginRight: 16,
  },
  horizontalImage: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },
  popularCard: {
    width: 250,
  },
  popularImage: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  seasonalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  seasonalCard: {
    width: 90,
    height: 90,
  },
  resumeCard: {
    borderWidth: 1,
    height: 90,
    width: 90,
    borderColor: '#EEE6F9',
  },
  resumeImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  offerCard: {
    width: 200,
    height: 120,
    borderRadius: 12,
    overflow: 'hidden',
  },
  offerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  offerMainText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  offerSubText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },
  offerBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#7E2CCF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  offerCode: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});