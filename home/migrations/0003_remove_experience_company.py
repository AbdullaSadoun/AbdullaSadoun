# Generated by Django 3.2.7 on 2024-11-11 06:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_skill_experience'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='experience',
            name='company',
        ),
    ]