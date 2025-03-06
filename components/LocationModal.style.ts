import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '70%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3C3C3C',
  },
  switchSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    gap: 18
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  locationItem: {
    flexDirection: 'row',
    gap: 18,
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#F9F5FD',
    borderRadius: 10,
    marginBottom: 10,
  },
  recentLocation: {
    flexDirection: 'row',
    gap: 18,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 15,
  },
  localtionNamesSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  cityText: {
    color: '#7E2CCF',
    fontWeight: 500,
    fontSize: 14
  },
  locationText: {
    fontSize: 14,
    color: '#000',
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#7E2CCF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#7E2CCF',
  },
  confirmButton: {
    backgroundColor: '#7E2CCF',
    borderRadius: 24,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});