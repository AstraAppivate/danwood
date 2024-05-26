from django.test import TestCase
from .models import Realm

class RealmModelTest(TestCase):
    def setUp(self):
        self.realm = Realm.objects.create(
            name='Test Realm',
            is_active=True,
            property_limit=10,
            seats=20
        )

    def test_string_representation(self):
        self.assertEqual(str(self.realm), 'test realm')

    def test_save_method(self):
        self.assertEqual(self.realm.name, 'test realm')

    def test_default_boolean_fields(self):
        self.assertTrue(self.realm.is_active)
        self.assertFalse(self.realm.soft_deleted)

    def test_field_limits(self):
        self.assertEqual(self.realm.property_limit, 10)
        self.assertEqual(self.realm.seats, 20)
